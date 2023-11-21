 import { allBlogs } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import ContainerIframe from '../components/ContainerIframe'
import dynamic from 'next/dynamic'

function Homepage() {
  return (
    <ContainerIframe>
      <iframe
        src="https://slides.com/enieber/curso-de-programacao/embed"
        width="576"
        height="420"
        title="Curso de programação"
        scrolling="no"
        frameborder="0"
        webkitallowfullscreen mozallowfullscreen allowfullscreen />
        <iframe src="https://slides.com/enieber/mvp-com-hasura/embed" width="576" height="420" title="MVP com Hasura" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/melhorando-o-type-safe-do-javascript/embed" width="576" height="420" title="Melhorando o type safe do javascript" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/trabalho-remoto-do-sonho-a-realidade/embed" width="576" height="420" title="trabalho remoto do sonho a realidade" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/deck-15/embed" width="576" height="420" title="Elliot Talks - React Components" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/t/embed" width="576" height="420" title="TopSapp Mobile e Integrações" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/desing-nao-e-arte/embed" width="576" height="420" title="Desing não é Arte" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/front-end/embed" width="576" height="420" title="front-end" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/deck-11/embed" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/deck-10/embed" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/php-e-banco-de-dados/embed" width="576" height="420" title="PHP e Banco de Dados" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/php-mvc/embed" width="576" height="420" title="Php mvc" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/deck-6/embed" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/deck/embed" width="576" height="420" title="php do jeito certo" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/linguagens-de-programacao-utilizadas-no-topsapp/embed" width="576" height="420" title="Linguagens de Programação Utilizadas no TopSapp" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/o-novo-mundo-javascript/embed" width="576" height="420" title="O novo mundo javascript" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/serious-development/embed" width="576" height="420" title="Serious Development" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/flp/embed" width="576" height="420" title="FLP" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe src="https://slides.com/enieber/node-js-eofront-end/embed" width="576" height="420" title="Node.js e o Front-End" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </ContainerIframe>
  )
}

export default Homepage
 
