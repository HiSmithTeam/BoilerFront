import { useGetSampleQuery } from "@/apis/sample/query";

const ApiContainer = () => {
  const { data, isLoading, isError, isFetched } = useGetSampleQuery({
    id: "test",
  });

  // isFecthed - 호출 완료
  return (
    <>
      <div className="content-wrap">
        <div className="content">
          ApiContainer
          <br />
          {isLoading ? (
            <p>로딩중...</p>
          ) : isError ? (
            <p>에러 발생...</p>
          ) : (
            <div
              style={{
                width: "100px",
                height: "50px",
                border: "1px solid red",
              }}
            >
              호출 결과 : {data.data.name}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ApiContainer;
