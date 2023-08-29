type Props = {
  name: string
  jobtitle: string
  picture: string
}

const Avatar = ({ name, picture, jobtitle }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold"> {name} | {jobtitle}</div>
    </div>
  )
}

export default Avatar
