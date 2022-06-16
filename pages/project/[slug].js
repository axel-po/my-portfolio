import Nav from "../../components/Nav/Nav";
import { useRouter } from "next/router";
import { Title, Text } from "../../components/Typography/Typography";
import { client } from "../../config";

export default function project({ work }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  console.log(work);
  return (
    <div className='container'>
      <div className='py-[120px] lg:flex lg:gap-3 lg:justify-between'>
        <Title>{work[0]?.title}</Title>
        <Text>{work[0]?.description}</Text>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const work = await client.fetch(`*[_type == "works" && _id == "${context.query.id}"]{title, image, description, github, demo}`);
  return {
    props: {
      work,
    },
  };
}
