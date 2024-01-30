interface HeaderProps {
  title: string
}

export const Header = ({title}: HeaderProps) => {
  return (
    <div className="mb-8 md:mb-6">
      <h1 className="text-2xl md:text-3xl font-semibold">
        {title}
      </h1>
    </div>
  )
}