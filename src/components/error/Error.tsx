interface IProps {
  status?: string;
  onReset: () => void;
}
const Error = ({ status, onReset }: IProps) => {
  const onClickReset = () => {
    onReset();
    // TODO: 홈으로 복귀
  };

  return (
    <div>
      <h1>ERROR 발생</h1>
      <h3>error code : {status}</h3>
      <button onClick={onClickReset}>reset</button>
    </div>
  );
};

export default Error;
