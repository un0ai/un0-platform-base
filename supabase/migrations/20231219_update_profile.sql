-- Create a secure function to update profiles
create or replace function public.update_profile(
  p_user_id uuid,
  p_full_name text
)
returns void
language plpgsql
security definer
as $$
begin
  -- Update the profile
  update public.profiles
  set full_name = p_full_name
  where id = p_user_id
  and auth.uid() = p_user_id; -- Extra security check
  
  -- Update the user metadata
  update auth.users
  set raw_user_meta_data = 
    raw_user_meta_data || 
    jsonb_build_object('full_name', p_full_name)
  where id = p_user_id
  and auth.uid() = p_user_id; -- Extra security check
end;
$$;
