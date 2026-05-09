<script lang='ts'>
	import { Heading } from '$lib/Heading';
	import { VIM_JP_RADIO_INFO } from '$lib/links';
	import * as Logo from '$lib/Logo';
	import { getGuestEpisodes } from './episodes.remote';

	const data = await getGuestEpisodes();

	const description = `エンジニアの楽園 vim-jp ラジオのゲスト出演回タイムラインです。`;
	const title = `ゲスト出演回タイムライン | ${VIM_JP_RADIO_INFO.title}`;
	const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
		dateStyle: 'medium',
		timeZone: 'Asia/Tokyo',
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name='description' content={description} />
</svelte:head>

<main uno-flex-col uno-py-16 uno-space-y-12>
	<section data-budoux uno-flex='~ col gap-6'>
		<a href='/' uno-color-LP-blue uno-text-sm uno-w-fit>← トップへ戻る</a>

		<div uno-flex='~ col gap-4'>
			<Heading title='ゲスト出演回' />
			<p uno-text>
				「エンジニアの楽園 vim-jp ラジオ」のゲスト出演回を時系列でまとめています。
				各エピソードのゲストはタグで確認できます。
			</p>
		</div>

		<div
			uno-grid='~ cols-2 gap-3'
			uno-tiny='grid-cols-3'
		>
			<div uno-border='solid 1 LP-darkGray/70' uno-p-4 uno-rounded-2>
				<p uno-color-LP-gray uno-text-xs>Guests</p>
				<p uno-color-LP-yellow uno-font-bold uno-text-2xl>{data.guestCount}</p>
			</div>
			<div uno-border='solid 1 LP-darkGray/70' uno-p-4 uno-rounded-2>
				<p uno-color-LP-gray uno-text-xs>Episodes</p>
				<p uno-color-LP-yellow uno-font-bold uno-text-2xl>{data.episodeCount}</p>
			</div>
			<div uno-border='solid 1 LP-darkGray/70' uno-p-4 uno-rounded-2>
				<p uno-color-LP-gray uno-text-xs>Since</p>
				<p uno-color-LP-yellow uno-font-bold uno-text-2xl>#5</p>
			</div>
		</div>
	</section>

	<section
		aria-label='ゲスト出演回タイムライン'
		uno-flex='~ col gap-0'
	>
		{#each data.episodes as episode (episode.number)}
			<article
				uno-border-l='solid 1 LP-darkGray'
				uno-flex='~ gap-4'
				uno-ml-4
				uno-pb-8
				uno-pl-5
				uno-relative
			>
				<div uno-flex='~ col gap-3' uno-w-full>
					<div uno-flex='~ wrap items-center gap-2'>
						<span uno-color-LP-yellow uno-font-bold uno-text-sm>{`#${episode.number}`}</span>
						<time datetime={episode.date} uno-color-LP-gray uno-text-xs>
							{dateFormatter.format(new Date(`${episode.date}T00:00:00+09:00`))}
						</time>
					</div>

					<h2 uno-color-LP-blue uno-font-bold uno-m-0 uno-text-xl>
						{episode.title}
					</h2>

					<ul uno-flex='~ wrap gap-2' uno-list-none uno-m-0 uno-p-0>
						{#each episode.guests as guest (guest)}
							<li
								uno-border='solid 1 LP-yellow/70'
								uno-color-LP-yellow
								uno-px-3
								uno-py-1
								uno-rounded-full
								uno-text-xs
							>
								{guest}
							</li>
						{/each}
					</ul>

					{#if episode.links?.applePodcast != null || episode.links?.youtube != null}
						<div aria-label='エピソードリンク' uno-flex uno-gap-3 uno-h-7>
							{#if episode.links.applePodcast != null}
								<Logo.ApplePodcast link={episode.links.applePodcast} />
							{/if}
							{#if episode.links.youtube != null}
								<Logo.YouTube link={episode.links.youtube} />
							{/if}
						</div>
					{/if}
				</div>
			</article>
		{/each}
	</section>
</main>
