import PropTypes from "prop-types";
import facebookIcon from "@/assets/icons/fb.png";
import twitterIcon from "@/assets/icons/twitter.png";
import linkedinIcon from "@/assets/icons/linkedin.png";
import instaIcon from "@/assets/icons/insta.png";

const TeamCard = ({ team }) => {
  return (
    <div className="p-6 rounded-xl border border-platinum text-center">
      <img
        src={team.image}
        className="inline-block w-full rounded-xl h-80 object-cover object-center mb-5"
        alt=""
      />
      <h2 className="text-2xl font-bold text-title mb-[10px]">{team.name}</h2>
      <p className="text-xl font-semibold text-nickel mb-4">
        {team.designation}
      </p>

      <div className="flex items-center justify-center gap-3">
        <a href={team.facebook}>
          <img src={facebookIcon} className="inline-block size-10" alt="" />
        </a>
        <a href={team.twitter}>
          <img src={twitterIcon} className="inline-block size-10" alt="" />
        </a>
        <a href={team.linkedin}>
          <img src={linkedinIcon} className="inline-block size-10" alt="" />
        </a>
        <a href={team.instagram}>
          <img src={instaIcon} className="inline-block size-10" alt="" />
        </a>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  team: PropTypes.object.isRequired,
};

export default TeamCard;
