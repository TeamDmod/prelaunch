import { APIInvite } from 'discord-api-types';

export function getIcon(id: string, icon: string, size = 128): string {
	const discord_cdn = 'https://cdn.discordapp.com';

	if (icon.startsWith('a_')) {
		return `${discord_cdn}/icons/${id}/${icon}.gif?size=${size}`;
	} else {
		return `${discord_cdn}/icons/${id}/${icon}.webp?size=${size}`;
	};
}

export async function getGuildFromInvite(invite: string) {
	const invite_api_endpoint = "https://discord.com/api/v9/invites";

	const data: APIInvite = await fetch(
		`${invite_api_endpoint}/${invite}?with_counts=true`,
	).then((res) => res.json());

	if (!data.guild) return null;

	return {
		name: data.guild.name,
		logo: data.guild.icon ? getIcon(data.guild.id, data.guild.icon) : null,
		url: `https://discord.gg/${data.code}`,
		members: data.approximate_member_count,
	};
}