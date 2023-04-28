export default function WrapperHeader({ children }) {
    return (
        <div className="max-w-readable before:w-1 before:h-full before:top-0 before:left-0 before:rounded-lg before:absolute relative before:bg-blue-500 py-4 rounded-lg pl-8 ">
            {children}
        </div>
    )
}