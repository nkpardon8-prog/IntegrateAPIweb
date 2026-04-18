export default function AdminApplicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Applications</h1>
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="text-[#a0a0b0] hover:text-white text-sm"
          >
            Log out
          </button>
        </form>
      </header>
      {children}
    </div>
  )
}
