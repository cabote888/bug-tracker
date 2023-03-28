export default function Sidebar() {
  return (
      <section className="fixed top-0 left-0 px-7 border-8 border-solid border-white py-2 bg-blue-500 h-full rounded-xl">
        <nav>
          <ul className="flex flex-col gap-5 text-white">
            <a className="text-lg cursor-pointer mb-5">Codekeeper</a>
            <a className="cursor-pointer text-sm">Dashboard</a>
            <a className="cursor-pointer text-sm">Tickets</a>
            <a className="cursor-pointer text-sm">Profile</a>
            <a className="cursor-pointer text-sm">Log out</a>
          </ul>
        </nav>
      </section>
  );
}
