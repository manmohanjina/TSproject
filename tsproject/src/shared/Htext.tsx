type props = {
  children: React.ReactNode;
};

export default function Htext({ children }: props) {
  return (
    <h1 className="basis-3/5 font montserrat text-3xl font-bold">{children}</h1>
  );
}
