'use client'

import { useScrollTop } from "@/hooks/use-scroll-top"

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    
    return(
        <div className={cn(
            'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0flex items-center w-full p-6',
            scrolled && 'border-b shadow-sm'
        )}> <div className="md:ml-auto md:justify-end justify-between w-full flex items-center">
                {isLoading && (
                    <Spinner />
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant='ghost' size='sm'>Sign-in</Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size='sm'>Get Nota free</Button>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant='ghost' size='sm' asChild>
                            <Link href='/documents'>
                                Enter Nota
                            </Link>
                        </Button>
                        <UserButton afterSignOutUrl="/" />
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}