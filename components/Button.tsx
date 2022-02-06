const Button = ({
  content,
  onClick,
}: {
  content: string
  onClick?: () => void
}) => {
  return (
    <div
      className={`
        bg-gradient-to-b from-light-purple to-light-green
        p-[1px] rounded-md
        my-2 sm:mx-5 sm:my-0
        w-full sm:max-w-[250px]
      `}
      onClick={onClick}
    >
      <div
        className={`
          bg-dark-grey hover:bg-gray-600
          px-8 py-2 rounded-md
          capitalize text-light-green text-center
          cursor-pointer
        `}
      >
        {content}
      </div>
    </div>
  )
}

export default Button
