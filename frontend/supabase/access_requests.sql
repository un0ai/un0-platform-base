-- Create the access_requests table
create table public.access_requests (
    id uuid default gen_random_uuid() primary key,
    email text not null,
    name text not null,
    reason text not null,
    status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table access_requests enable row level security;

-- Users can view their own requests
create policy "Users can view own requests"
    on access_requests for select
    using (auth.jwt() ->> 'email' = email);

-- Users can insert their own requests if they don't have one
create policy "Users can insert own requests once"
    on access_requests for insert
    with check (
        auth.jwt() ->> 'email' = email
        and not exists (
            select 1
            from access_requests ar
            where ar.email = auth.jwt() ->> 'email'
        )
    );

-- Create function to update timestamps
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

-- Create trigger for updating timestamps
create trigger handle_access_requests_updated_at
    before update on access_requests
    for each row
    execute function handle_updated_at();
