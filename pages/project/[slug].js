import Nav from "../../components/Nav/Nav";
import { useRouter } from "next/router";
import { Title, Text } from "../../components/Typography/Typography";

export default function project({ work }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  console.log(router.query.slug);
  return (
    <div className='container'>
      <Nav />
      <div className='py-[120px] lg:flex lg:gap-3 lg:justify-between'>
        <Title>Clone de Netflix</Title>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </div>
    </div>
  );
}

