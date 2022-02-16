import Image from "next/image"

const SocialIcon = ({
  name,
  link,
}: {
  name: string
  link: string
}) => {
  return (
    <div
      className={`
        -mx-3
        cursor-pointer
      `}
    >
      <a href={link}>
        <Image
          src={require("../assets/images/" + name + ".svg")}
          width={110}
          height={110}
          alt={name}
          quality={100}
        />
      </a>
    </div>
  )
}

export default SocialIcon
