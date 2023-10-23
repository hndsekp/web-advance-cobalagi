
import { ArticlesCardsGrid } from "@/component/ArticleCardsGrid";
import { FooterSocial } from "@/component/FooterSocial";
import { HeaderMenu } from "@/component/HeaderMenu";
import { HeroBullets } from "@/component/HeroBullets";
import { HeaderSimple } from "@/component/SimpleHeader";
import { SimpleGrid } from "@mantine/core";

export default function Home() {
  return(
    <>
    <HeaderMenu/>
    <HeroBullets/>
    <FooterSocial/>
    </>
  )
}