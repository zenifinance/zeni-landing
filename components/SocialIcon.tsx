import { IconType } from "react-icons/lib"

const SocialIcon = ({
  Icon,
  onClick,
}: {
  Icon: IconType
  onClick?: () => void
}) => {
  return (
    <div
      className={`
        mx-3
        cursor-pointer
      `}
      onClick={onClick}
    >
      <Icon size={40} color="#73FFE3" />
    </div>
  )
}

export default SocialIcon
