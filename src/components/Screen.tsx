interface ScreenProps {
  value: string;
}

export default function Screen({ value }: ScreenProps) {
  return (
    <div className="screen">
      <p>{value}</p>
    </div>
  )
}
