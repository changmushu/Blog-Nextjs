export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl flex items-center justify-center md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center md:text-left">
      {children}
    </h1>
  )
}
