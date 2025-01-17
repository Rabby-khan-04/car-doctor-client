import errorImg from "@/assets/images/error/404.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className="h-screen flex items-center justify-center">
        <div className="container text-center">
          <img src={errorImg} className="inline-block " alt="" />
          <Button variant="primary" size="lg" onClick={() => navigate("/")}>
            Back To Home
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
