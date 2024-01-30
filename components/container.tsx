export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1248px] mx-auto px-4">
      {children}
    </div>
  )
}