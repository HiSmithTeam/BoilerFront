import { useGetSamleLoginMutation } from "@/apis/sample/query";

const LoginContainer = () => {
  const { mutate } = useGetSamleLoginMutation();

  const handleMutateClick = () => {
    mutate(
      { userId: "test", password: "test" },
      {
        onSuccess: (response) => {
          console.log("::: login success :::", response);
        },
        onError: (error) => {
          alert("login error");
          console.log("::: login error :::", error);
        },
      }
    );
  };

  return (
    <>
      <div className="content-wrap">
        <div className="content">
          LoginContainer
          <br />
          <button onClick={() => handleMutateClick()}>
            id: test
            <br />
            pw: test
            <br />
            login 테스트
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;
