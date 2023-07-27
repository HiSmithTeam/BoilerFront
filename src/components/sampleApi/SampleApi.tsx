import { useGetSampleApi } from "@/apis/sample/query";

interface ISampleApiProps {}

const SampleApi = ({}: ISampleApiProps) => {
  const { data, isLoading, isError, isFetched } = useGetSampleApi({
    id: "test",
  });

  if (isLoading) {
    return <p>로딩중...</p>;
  }

  if (isError) {
    return <p>에러 발생...</p>;
  }

  // isFecthed - 호출 완료
  return (
    <div style={{ width: "100px", height: "50px", border: "1px solid red" }}>
      호출 결과 : {data.data.name}
    </div>
  );
};

export default SampleApi;
