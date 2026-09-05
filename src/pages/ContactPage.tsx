import SmallCard from "../components/SmallCard";
import EmailForm from "../components/EmailForm";

function ContactPage() {
  return (
    <main className="max-w-6xl min-h-screen mx-auto px-6 py-12 md:py-16">
      {/* <div className="max-w-6xl mx-auto px-6"> */}
      <header className="max-w-3xl text-center mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 text-center tracking-tight">
          Get In Touch
        </h1>
        <p className="text-center text-gray-600 mx-auto mb-12 text-lg leading-relaxed">
          Have an exciting project, a role opportunity, or just want to chat
          about software architecture? Drop me a line!
        </p>
      </header>

      <div className="space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SmallCard
            icon={"📧"}
            title="Email Me"
            subTitle="kyran.lewis14@gmail.com"
            action="Send Email"
            link={"mailto:kyran.lewis14@gmail.com"}
          />
          <SmallCard
            icon={"📞"}
            title="Call Me"
            subTitle="07428 791005"
            action="Let's Talk"
            link="tel:07428791005"
          />
          <SmallCard
            icon={"🏢"}
            title="LinkedIn"
            subTitle="/in/kyran-lewis-software-engineer/"
            action="Let's Connect"
            link="https://www.linkedin.com/in/kyran-lewis-software-engineer/"
          />
        </section>

        <EmailForm />
      </div>
      {/* </div> */}
    </main>
  );
}

export default ContactPage;
