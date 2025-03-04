import { Carousel } from "@mantine/carousel";
import { Container, Image, Stack, Text, Title } from "@mantine/core";
export function CarouselSlide(props) {
  const { image, title, subtitle } = props.slide;
  return (
    <Carousel.Slide>
      <Title fs={"italic"} variant="gradient" gradient={{from: 'indigo.9' , to: 'yellow.9', deg: 45}} order={3}>FINOTIC</Title>
      <Container>
        <Image my={20} src={image} width={"100%"} />
      </Container>
      <Stack spacing={"xs"}>
        <Title order={1}>{title}</Title>
        <Text c={"dimmed"}>{subtitle}</Text>
      </Stack>
    </Carousel.Slide>
  );
}
