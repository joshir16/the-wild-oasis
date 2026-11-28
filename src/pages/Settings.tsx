import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";

function Settings() {
  return (
    <>
      <div className="flex flex-col justify-between ">
        <h1 className="text-3xl font-semibold leading-snug">
          Update hotel settings
        </h1>
      </div>
      <UpdateSettingsForm />
    </>
  );
}

export default Settings;
