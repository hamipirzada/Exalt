
const Questions = () => {
       const faq = [
            {
                question: "Why GoExalt System for Odoo Customization?",
                answer: "360-degree Odoo customization solutions for managing and organizing the business. Conduct grass-root level business analysis to understand business workflows and requirements. GoExalt System provides extensive services in GoExalt System installation, implementation of customized modules, and post-implementation support.",
            },
            {
                question: "Why I choose GoExalt System over freelancers for Odoo customization?",
                answer:"GoExalt System is Odoo official partner and therefore more reliable. Exclusively specialized on keys like Odoo Consultancy, Odoo implementation, Odoo Customization, Odoo Training. Have authorized signatories having access towards Enterprise Edition source code, providing quick resolutions to issues."
    
            },
            {
                question: "How GoExalt System fulfill your business goals related to customization?",
                answer: "Odoo partners are costlier than freelancers because they provide quality service that serves as the backbone for the long business run. Partners are costlier because they are trained and certified in Odoo. However, compared to the long successful business run, the investment on Odoo Partners are highly reasonable."
            },
            {
                question:"What are the steps to customize an Odoo module?",
                answer:"Requirement Analysis in business involves the current study of business workflows, understanding the current pitfalls limiting the business returns and efficiency. Gap Analysis is bridging the gap between current inefficiencies and enhancing future efficiencies. GoExalt System customize modules as per need."
            },
            {
                question:"How can GoExalt System enhance my Salesforce experience??",
                answer:"GoExalt System provides expert Salesforce consulting and development services to help you maximize the potential of your Salesforce implementation. They offer tailored solutions, comprehensive services, and continuous support to ensure your Salesforce platform is optimized for your business needs."
            },
            {
                question:"What are the main features of Salesforce?",
                answer:"Salesforce offers a wide range of features, including sales automation, customer service management, marketing automation, analytics, and app development."
            },
            {
                question:"Why Should You Choose GoExalt System??",
                answer:"Expertise and Experience GoExalt System has a team of experienced Salesforce consultants and developers who have successfully implemented Salesforce solutions for numerous clients across different industries."
            }
            
    
        
        ];
  return (
    <>
    <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 max-w-5xl mx-auto my-10 p-6 ">
<h1 className="text-5xl">Frequently Asked Questions</h1></div>
  <div className="w-[90vw] sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 max-w-5xl mx-auto my-10 p-6 bg-gradient-to-tr  border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-accordion="collapse">

{
  faq.map((item, index)=>{
    
    return(
      // <div key={index} className="" data-accordion="open">
      //   <h2 className="text-xl font-bold  mb-4" data-aos="fade-left" >{item.question}</h2>
      //   <p className="" data-aos="fade-left" >{item.answer}</p>
      // </div>

      <div key={index} className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">{item.question}</div>
  <div className="collapse-content">
    <p>{item.answer}</p>
  </div>
</div>

    )
  })
}

</div>
    </>
  )
}

export default Questions