"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogIn,
  LogOut,
  MessageCircle,
  Settings,
  Sparkles,
} from "lucide-react"
import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserData {
  name?: string | null
  email?: string | null
  avatar?: string | null
}

export function NavUser() {
  const { isMobile } = useSidebar()
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [newName, setNewName] = useState("")

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        const name = session.user.user_metadata?.name || session.user.email?.split('@')[0] || 'user'
        setUserData({
          name,
          email: session.user.email,
          avatar: session.user.user_metadata?.avatar_url || '/avatars/shadcn.jpg'
        })
        setNewName(name)
      } else {
        setUserData(null)
      }
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const name = session.user.user_metadata?.name || session.user.email?.split('@')[0] || 'user'
        setUserData({
          name,
          email: session.user.email,
          avatar: session.user.user_metadata?.avatar_url || '/avatars/shadcn.jpg'
        })
        setNewName(name)
      } else {
        setUserData(null)
      }
    })

    checkUser()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleUpdateProfile = async () => {
    if (userData) {
      const { error } = await supabase.auth.updateUser({
        data: { name: newName }
      })

      if (!error) {
        setUserData(prev => prev ? { ...prev, name: newName } : null)
        setIsOpen(false)
      }
    }
  }

  const displayName = userData 
    ? `[ ${userData.name} ]`
    : '[ guest user ]'

  const displayEmail = userData
    ? userData.email
    : '→ log in to your dashboard'

  const avatarSrc = userData
    ? userData.avatar
    : '/avatars/nouser.jpg'

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={avatarSrc} alt={displayName} />
                <AvatarFallback className="rounded-lg">
                  {userData ? userData.name?.[0].toUpperCase() : 'G'}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{displayName}</span>
                <span className="truncate text-xs">{displayEmail}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={avatarSrc} alt={displayName} />
                  <AvatarFallback className="rounded-lg">
                    {userData ? userData.name?.[0].toUpperCase() : 'G'}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{displayName}</span>
                  <span className="truncate text-xs">{displayEmail}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {userData ? (
                <>
                  <DropdownMenuItem asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={handleSignOut}
                    >
                      <LogOut className="size-4 mr-2" />
                      Sign out
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                      <SheetTrigger asChild>
                        <div className="flex w-full items-center gap-2 px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer">
                          <Settings className="size-4" />
                          Profile Settings
                        </div>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Profile Settings</SheetTitle>
                          <SheetDescription>
                            Update your profile information here.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              value={newName}
                              onChange={(e) => setNewName(e.target.value)}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              value={userData?.email || ''}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button onClick={handleUpdateProfile}>
                            Save changes
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => router.push('/login')}
                  >
                    <LogIn className="size-4 mr-2" />
                    Sign in
                  </Button>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem asChild>
                <Link href="#" className="flex w-full items-center gap-2">
                  <MessageCircle className="size-4" />
                  Chat with un0
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#" className="flex w-full items-center gap-2">
                  <CreditCard className="size-4" />
                  Email support
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
