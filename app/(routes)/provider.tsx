import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './_components/appSidebar';
import { SiteHeader } from './_components/siteHeader';

function DashboardProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <SidebarProvider>
        <AppSidebar variant="inset" />
         <SidebarInset>
            <AppSidebar />
            <main className='flex flex-1 flex-col bg-[#171717]'>
                <SiteHeader />
                <div>{children}</div>
                </main>
        </SidebarInset>
        </SidebarProvider>

    )
}

export default DashboardProvider