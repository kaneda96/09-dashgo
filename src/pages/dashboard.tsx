import { Header } from "../components/Header";
import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, Theme } from "@chakra-ui/react";
import { Sidebar } from "./../components/Sidebar";
import { theme } from "../styles/theme";
import { ApexOptions } from "apexcharts";

/* IMPORTANTE LEMBRAR */
// Está biblioteca em específico precisa da referência do window que fica no lado do client
// para que seja possível trabalhar com esta bibliotéca dentro do next(que é SSR) é necessário
// fazer o import com o dynamic do 'next/dynamic' assim ele irá carregar a lib no lado do client(browser)
// obs: isso se chama lazy loading

const Chart = dynamic(() => import("react-apexcharts"), {
  /* IMPORTANTE PROPRIEDADE */
  //passando essa propriedade ele sempre será carregado no lado do browser e nunca do servidor
  ssr: false,
});

//Todas essas opções
const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    //Vem das configurações do chakraUI
    foreColor: theme.color.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.color.gray[600],
    },
    axisTicks: {
      color: theme.color.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000z",
      "2021-03-19T00:00:00.000z",
      "2021-03-20T00:00:00.000z",
      "2021-03-21T00:00:00.000z",
      "2021-03-22T00:00:00.000z",
      "2021-03-23T00:00:00.000z",
      "2021-03-24T00:00:00.000z",
    ],
  },
  fill: {
    opacity: 0.5,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  {
    name: "series 1",
    data: [31, 120, 10, 28, 61, 18, 200],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box pb="4" p={["6", "8"]} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box pb="4" p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
