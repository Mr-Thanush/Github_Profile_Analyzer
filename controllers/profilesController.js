import { getGithubProfile } from "../services/gitHubServices.js";
import { saveProfile, getProfiles, getProfileByUsername } from "../models/profileModels.js";

//analyze GitHub Profiles
export const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const data = await getGithubProfile(username);
    const createdDate = new Date(data.created_at);
    const accountAgeDays = Math.floor(
      (Date.now() - createdDate) /
      (1000 * 60 * 60 * 24)
    );
    const profile = {
      github_id: data.id,
      username: data.login,
      name: data.name,
      bio: data.bio,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      public_gists: data.public_gists,
      account_age_days: accountAgeDays,
      profile_url: data.html_url,
      avatar_url: data.avatar_url,
      created_at: new Date(data.created_at)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
    };
    await saveProfile(profile);
    res.status(200).json({
      success: true,
      profile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

//Get All GitHub Profiles
export const getAllProfiles = async (req, res) => {
  const profiles = await getProfiles();

  res.status(200).json({
    success: true,
    profiles
  });
};


//Get Single GitHub Profile
export const getSingleProfile = async (req, res) => {
  const profile = await getProfileByUsername(req.params.username);
  if (!profile) {
    return res.status(404).json({
      success: false,
      message: "Profile not found"
    });
  }
  res.status(200).json({
    success: true,
    profile
  });
};