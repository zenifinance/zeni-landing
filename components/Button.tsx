const Button = ({
  name,
  link,
}: {
  name: string
  link: string
}) => {
  return (
    <div
      className={`
        bg-gradient-to-b from-light-purple to-light-green
        p-[1px] rounded-md
        my-2 sm:mx-8 sm:my-0
        w-[250px] h-[70px]
      `}
    >
      <div
        className={`
          bg-dark-grey hover:bg-gray-600
          text-light-green text-center
          cursor-pointer
          w-full h-full rounded-md
          flex items-center justify-center
          text-[45px] pt-[10px]
        `}
        style={{fontFamily: 'Tenali Ramakrishna'}}
      >
        <a href={link}>
          <a>{name}</a>
        </a>
      </div>
    </div>
  )
}

export default Button
