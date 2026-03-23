type ProfileCardProps = {
  profileName: string;
  profilePhoto: string;
  profileProfession: string;
};

const ProfileCard = ({
  profileName,
  profilePhoto,
  profileProfession,
}: ProfileCardProps) => {
  return (
    <article className="w-72 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1">
      <img
        src={profilePhoto}
        alt={`Foto de ${profileName}`}
        className="h-56 w-full object-cover"
      />
      <div className="space-y-1 px-5 py-4">
        <h2 className="text-xl font-bold text-slate-800">{profileName}</h2>
        <p className="text-sm font-medium text-slate-500">{profileProfession}</p>
      </div>
    </article>
  );
};

export default ProfileCard;