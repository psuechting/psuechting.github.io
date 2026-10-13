---
title: Climate Funding Intelligence Platform
summary: >-
  A relational funding database that turns hundreds of AI-scraped leads a day into a curated,
  ever-growing library of nearly 10,000 climate R&D funding opportunities, delivered to clients
  through a portal.
organization: Climate Finance Solutions
role: Information architecture & database design
years: 2023 – present
tools:
  - Airtable
  - Relational data modeling
  - AI-assisted web scraping
  - Client portal
url: https://www.climatefinancesolutions.com/
order: 1
---

## The problem

Climate Finance Solutions tracked funding opportunities in a single table. Each opportunity was a row, and client information was added alongside it in new fields, one client per field. That wide format made the data hard to query, reuse, or build on: every new client meant another column, and information about opportunities and clients couldn't be tracked independently.

What the work needed was a relational database, with opportunities and clients tracked separately and linked, so the data could support more powerful ways of working with it, building on it, and manipulating it.

## What I built

I designed and built the platform's information architecture in Airtable, replacing the single wide table with a relational database that runs from discovery to delivery:

<ol class="flow">
	<li><strong>Discovery</strong><span>AI-driven scraping systems surface hundreds of candidate opportunities every day.</span></li>
	<li><strong>Intake</strong><span>A manually processed intake system screens those leads down to the tens of opportunities worth adding each day.</span></li>
	<li><strong>Core database</strong><span>One relational database holds every opportunity as the single source of truth.</span></li>
	<li><strong>Client portal</strong><span>The core database feeds each client's own relational database in a client portal.</span></li>
</ol>

## Scale

- **Hundreds** of opportunities scraped per day
- **Tens** of qualified opportunities added per day
- **Nearly 10,000** opportunities in an ever-accumulating database

## Who uses it

Climate tech entrepreneurs and established organizations in climate-related sectors that are seeking R&D funding. The platform has since evolved into a commercial product offered by [Climate Finance Solutions](https://www.climatefinancesolutions.com/).
