<script>

    import Heading from '../components/Heading-3.svelte';
    import Collapser from "../components/Collapser.svelte";

    const courses = [
        {
            title: "Embedded System",
            description: "An embedded system is a controller with a dedicated function within a larger mechanical or electrical system, often with real-time computing constraints. It is embedded as part of a complete device often including hardware and mechanical parts. Embedded systems control many devices in common use today.[3] Ninety-eight percent of all microprocessors manufactured are used in embedded systems.Embedded systems range from portable devices such as digital watches and MP3 players, to large stationary installations like traffic light controllers, programmable logic controllers, and large complex systems like hybrid vehicles, medical imaging systems, and avionics. Complexity varies from low, with a single microcontroller chip, to very high with multiple units, peripherals and networks mounted inside a large equipment rack."
        },
        {
            title: "Arduino",
            description: "Arduino is an open-source hardware and software company, project and user community that designs and manufactures single-board microcontrollers and microcontroller kits for building digital devices. Its products are licensed under the GNU Lesser General Public License (LGPL) or the GNU General Public License (GPL),[1] permitting the manufacture of Arduino boards and software distribution by anyone. Arduino boards are available commercially in preassembled form or as do-it-yourself (DIY) kits. Arduino board designs use a variety of microprocessors and controllers. The boards are equipped with sets of digital and analog input/output (I/O) pins that may be interfaced to various expansion boards or breadboards (shields) and other circuits. The boards feature serial communications interfaces, including Universal Serial Bus (USB) on some models, which are also used for loading programs from personal computers. The microcontrollers can be programmed using C and C++ programming languages. In addition to using tradit"
        },
        {
            title: "IOT",
            description: "Arduino is an open-source hardware and software company, project and user community that designs and manufactures single-board microcontrollers and microcontroller kits for building digital devices. Its products are licensed under the GNU Lesser General Public License (LGPL) or the GNU General Public License (GPL),[1] permitting the manufacture of Arduino boards and software distribution by anyone. Arduino boards are available commercially in preassembled form or as do-it-yourself (DIY) kits. Arduino board designs use a variety of microprocessors and controllers. The boards are equipped with sets of digital and analog input/output (I/O) pins that may be interfaced to various expansion boards or breadboards (shields) and other circuits. The boards feature serial communications interfaces, including Universal Serial Bus (USB) on some models, which are also used for loading programs from personal computers. The microcontrollers can be programmed using C and C++ programming languages. In addition to using tradit"
        },
        {
            title: "AutoCAD",
            description: "AutoCAD is a commercial computer-aided design (CAD) and drafting software application. Developed and marketed by Autodesk,[1] AutoCAD was first released in December 1989 as a desktop app running on microcomputers with internal graphics controllers.[2] Before AutoCAD was introduced, most commercial CAD programs ran on mainframe computers or minicomputers, with each CAD operator (user) working at a separate graphics terminal.[3] Since 2010, AutoCAD was released as a mobile- and web app as well, marketed as AutoCAD 360. AutoCAD is used in industry, by architects, project managers, engineers, graphic designers, city planners and other professionals. It was supported by 750 training centers worldwide in 1994"
        },
        {
            title: "SOLIDWORKS",
            description: "SolidWorks is a solid modeling computer-aided design (CAD) and computer-aided engineering (CAE) computer program that runs primarily on Microsoft Windows. While it is possible to run SolidWorks on MacOS, that is not supported by SolidWorks.[2] SolidWorks is published by Dassault Systèmes.DS Solidworks Corp. has sold over 3.5 million licenses of SolidWorks worldwide.[11] This includes a large proportion of educational licenses.[12] The Sheffield Telegraph comments that Solidworks is the world's most popular CAD software.[13][better source needed] Its user base ranges from individuals to large corporations, and covers a very wide cross-section of manufacturing market segments. Commercial sales are made through an indirect channel, which includes dealers and partners throughout the world. In the United States, the first reseller of SolidWorks, in 1995, was Computer Aided Technology, LLC, headquartered in Chicago. Directly competitive products to SolidWorks include PTC Creo Elements/Pro, Solid Edge, and Autodes"
        },
        {
            title: "Ansys",
            description: "Ansys Inc. is an American public company based in Canonsburg, Pennsylvania. It develops and markets engineering simulation software. Ansys software is used to design products and semiconductors, as well as to create simulations that test a product's durability, temperature distribution, fluid movements, and electromagnetic properties. Ansys was founded in 1970 by John Swanson. Swanson sold his interest in the company to venture capitalists in 1993. Ansys went public on NASDAQ in 1996. In the 2000s, Ansys made numerous acquisitions of other engineering design companies, acquiring additional technology for fluid dynamics, electronics design, and other physics analysis."
        },
        {
            title: "HTML",
            description: "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document."
        },
        {
            title: "Technical Project",
            description: "Lorem Ipsum Dolores mit amit"
        },
        {
            title: "STEM",
            description: "Science, Technology, Engineering and Mathematics (STEM), previously Science, Math, Engineering and Technology (SMET),[1] is a term used to group together these academic disciplines.[2] This term is typically used when addressing education policy and curriculum choices in schools to improve competitiveness in science and technology development. It has implications for workforce development, national security concerns and immigration policy.[2] The science in STEM typically refers to two out of the three major branches of science: natural sciences, including biology, physics, and chemistry, and formal sciences, of which mathematics is an example, along with logic and statistics; the third major branch of science, social sciences, including psychology, sociology, and political science, are categorized separately from the other two branches of science, and are instead grouped together with humanities and arts to form another counterpart acronym named HASS - Humanities, Arts, and Social Sciences.[3] In the United "
        },
        {
            title: "Plug 'n Play",
            description: "Plug and Play (PnP) is a technology that allows the operating system to detect and configure internal and external peripherals as well as most adapters. It has the ability to find and configure hardware components without having to reset DIP switches and jumpers."
        },
        {
            title: "Explore",
            description: "Lorem Ipsum Dolores mit amit"
        }
    ]

    let headingName = "Courses";

</script>

<style>

    .rvp-what-we-do{
        background-color: var(--white);
        z-index: 0 !important;
        margin-top: 200px;
        margin-bottom: 8vh;
    }
    @media(max-width: 1390px){
        .rvp-what-we-do{
            margin-top: 280px;
        }
    }
    @media(max-width: 645px){
        .rvp-what-we-do{
            margin-top: 350px;
        }
    }
    @media(max-width: 450px){
        .rvp-what-we-do{
            margin-top: 400px;
        }
    }

</style>

<div class="container-fluid text-center rvp-what-we-do">
    <Heading {headingName}/>
    {#each courses as course}
        <Collapser {course}/>
    {/each}
</div>