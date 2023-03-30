export default function SidebarItem({ children }) {
  return (
    <li className="flex items-center cursor-pointer border border-blue-500 hover:bg-blue-400 hover:rounded-lg hover:border hover:border-1 hover:border-solid hover:border-white py-2 px-2">
      {children}
    </li>
  );
}