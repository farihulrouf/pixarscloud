export default function Button({ children }) {
    return (
        <button className="px-6 py-3 lg:py-3 2xl:py-4 bg-[#FFBE0B] sm:text-base text-sm rounded-3xl font-semibold">
            {children}
        </button>
    )
}