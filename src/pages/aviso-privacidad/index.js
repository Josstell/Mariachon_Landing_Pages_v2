import React from 'react'
import Head from 'next/head'
import Header from '../../components/LandingPages/Header'
import { database } from '../../helpers/database'

const aviso_privacidad = ({ data }) => {
  return (
    <>
      <Head>
        <title>Mariachon - Aviso privacidad</title>
        <link rel="icon" href="/icons/logomariachon.png" />
      </Head>
      <Header
        data={data[0].header}
        icons={data[0].icons}
        region={data[0].region}
      />
      <div className="p-4 container flex flex-col justify-center  bg-slate-50">
        <h1 className="text-xl md:text-5xl my-5 text-center  font-bold">
          Aviso de privacidad
        </h1>
        <h4 className="text-lg  ">
          <span className="font-semibold">
            Identidad y domicilio del responsable.
          </span>
          “Empresa como tal” el Mariachon con domicilio calle 7 sur no. 309 San
          Juan Tianguismanalco, Puebla.
        </h4>
        <p className="text-justify py-2">
          Aviso dirigido a los titulares de datos personales que obran en el
          sitio web de http://mariachon.com/ y él no tratamiento de datos
          personales sensibles. http://mariachon.com/ es responsable de recabar
          sus datos personales, del uso que se le dé a los mismos y de la
          protección de dichos datos.
        </p>
        <p className="text-justify py-2">
          Así mismo hace de su conocimiento que los datos personales
          proporcionados por usted de manera directa o por cualquier medio de
          contacto incluyendo los sensibles, que actualmente o en el futuro
          obren en nuestras bases de datos, serán tratados y/o utilizados para
          informar sobre cambios, nuevos productos o servicios que estén
          relacionados con los que han sido requerido por usted como cliente.
        </p>
        <h3 className="text-2xl text-center py-5 font-bold">Finalidades</h3>
        <p className="text-justify py-2">
          <span>Mariachon</span> dará cumplimiento a obligaciones contraídas;
          evaluar la calidad del servicio prestado, realizar estudios internos
          sobre hábitos de servicio, contactarlo en caso de requerirse
          información adicional para completar una transacción, para la atención
          de quejas y aclaraciones o por su seguridad con el, de autenticar su
          identidad. Sus datos personales en nuestra posesión tienen como
          finalidad principal la de ofrecer nuestra variedad de servicios, así
          como publicidad e información relevante que puedan ser de su interés.
        </p>
        <p className="text-justify py-2">
          Para las finalidades antes mencionadas, requerimos obtener los
          siguientes datos personales:
        </p>
        <ul className="pl-5">
          <li>Nombre(s) y apellidos</li>
          <li>Teléfono(s) celular, oficina y/o casa</li>
          <li>E-mail</li>
          <li>Dirección</li>
          <li>Código Postal.</li>
        </ul>
        <p className="text-justify py-2">
          Usted tiene derecho de acceder, rectificar y cancelar sus datos
          personales, así como de oponerse al tratamiento de estos o revocar el
          consentimiento. Los titulares podrán ejercer los derechos que les
          confiere la Ley, mediante una solicitud por escrito, que deberá ser
          presentada en el domicilio al rubro citado o al correo electrónico:
          informes@mariachon.com. Todas las solicitudes que sean presentadas a
          “Mariachon, independiente del medio utilizado por los titulares,
          deberán realizar lo siguiente:
        </p>
        <p className="text-justify py-2">
          Incluir el nombre y firma autógrafa del titular, así como un domicilio
          u otro medio para comunicarle la respuesta a su solicitud.
        </p>
        <p className="text-justify py-2">
          Acompañar los documentos oficiales que acrediten la identidad del
          titular. Incluir una descripción clara y precisa de los datos
          personales respecto de los cuales ejercitará los derechos que les
          confiere la Ley.
        </p>
        <p className="text-justify py-2">
          Incluir cualquier elemento o documento que facilite la localización de
          los datos personales de que se traten.
        </p>
        <p className="text-justify py-2">
          “La empresa Mariachon” le recomienda a usted como cliente que
          actualice sus datos cada vez que éstos sufran alguna modificación,
          esto permitirá brindarle un servicio más personalizado;
          consecuentemente dicha empresa no solicita por ningún medio datos
          personales sensibles, en los términos descritos por la Ley. Los datos
          serán tratados de conformidad a lo dispuesto en la Ley Federal de
          Protección de Datos Personales en Posposición de los Particulares y su
          Reglamento.
        </p>
        <p className="text-justify py-2">
          La confidencialidad de los datos está garantizada y los mismos están
          protegidos por medidas de seguridad administrativas, técnicas y
          físicas, para evitar su daño, pérdida, alteración, destrucción, uso,
          acceso o divulgación indebida. Únicamente las personas autorizadas
          tendrán acceso a sus datos.
        </p>
        <p className="text-justify py-2">
          Así mismo, le informamos que sus datos personales pueden ser
          transferidos y tratados dentro y fuera del país, por personas
          distintas a esta “empresa”. En ese sentido, su información puede ser
          compartida con empresas ajenas para informar sobre cambios o nuevos
          servicios que estén relacionados con los que han sido contratados por
          usted como cliente.
        </p>
        <p className="text-justify py-2">
          Si usted no manifiesta su oposición para que sus datos personales sean
          transferidos o utilizados a los servicios del sitio
          https://mariachiangelopolis.com/ se entenderá que ha otorgado su
          consentimiento para ello.
        </p>
        <p className="text-justify py-2">
          Finalmente nos reservamos el derecho bajo su exclusiva discreción de
          cambiar, modificar, agregar, actualizar o eliminar al presente aviso
          de privacidad, para la atención de novedades legislativas o
          jurisprudenciales, políticas internas, nuevos requerimientos para la
          prestación u ofrecimiento de nuestros servicios.
        </p>
        <p className="text-justify py-2">
          Cualquier modificación a este aviso de privacidad podrá consultarlo en
          el sitio web: http://mariachon.com/ [sección aviso de privacidad].
          Para cualquier duda en materia de privacidad de datos personales, no
          dude en enviar correo electrónico a informes@mariachon.com. y con
          gusto se le atenderá.
        </p>
      </div>
    </>
  )
}

export default aviso_privacidad

export async function getStaticProps() {
  return {
    props: {
      data: database,
    },
  }
}
