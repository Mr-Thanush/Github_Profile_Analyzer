import pool from "../config/db.js";

export const saveProfile = async (profile) => {
  const query = `
  INSERT INTO github_profiles
  (
    github_id,
    username,
    name,
    bio,
    public_repos,
    followers,
    following,
    public_gists,
    account_age_days,
    profile_url,
    avatar_url,
    created_at
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

  ON DUPLICATE KEY UPDATE

  public_repos=VALUES(public_repos),
  followers=VALUES(followers),
  following=VALUES(following),
  public_gists=VALUES(public_gists)
  `;

  await pool.execute(query, [
    profile.github_id,
    profile.username,
    profile.name,
    profile.bio,
    profile.public_repos,
    profile.followers,
    profile.following,
    profile.public_gists,
    profile.account_age_days,
    profile.profile_url,
    profile.avatar_url,
    profile.created_at
  ]);
};

export const getProfiles = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM github_profiles"
  );

  return rows;
};

export const getProfileByUsername = async (
  username
) => {
  const [rows] = await pool.query(
    "SELECT * FROM github_profiles WHERE username=?",
    [username]
  );

  return rows[0];
};