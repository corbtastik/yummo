#!/bin/bash

# start options
title=${title:-weekly}
date=${date:-$(date +%Y-%m-%d)}
week=${week:-$(date +%U)}
dir=${dir:-.}

# parse options
while [ $# -gt 0 ]; do
   if [[ $1 == *"--"* ]]; then
        param="${1/--/}"
        declare $param="$2"
   fi
  shift
done

# startup banner
echo "= yummo creating new weekly =========================================="
echo "  - title: ${title}"
echo "  -  date: ${date}"
echo "  -  week: ${week}"
echo "  -  file: ${dir}/${date}-${title}-${week}.md"
echo "======================================================================"

cat << WEEKLY > ${dir}/${date}-${title}-${week}.md
---
layout:      post
title:       ${title}/${week}
description: Week ${week} report
date:        ${date}
permalink:   ${title}/${week}
category:    weekly
tags:
- weekly-report
- weekly-${week}
---

#### Summary

* The Summary section should be brief statements about the work done thus far, and the focus going forward.

#### Recap last week

* List the things that happened last week.

#### This week

* List the things you expect to accomplish this week.

#### The future

* List the things you intend to accomplish next week.

#### Tasks and Milestones

* Build upon the Summary by providing:
  * Detailed information on tasks you intend to work this week.
  * Capture significant milestones to achieve this week.

* __Terms:__
  * __Task:__ A piece of work to be done.
  * __Milestone:__ An action or event marking a significant change or stage in development.

> __Recommendation:__ Add a table of the Tasks being worked this week.

| Task                          | Target Date | Detail                                    |
|-------------------------------|-------------|-------------------------------------------|
| CI/CD pipeline design         | 12/06/2022  | Gitlab CI/CD pipeline design complete.    |
| CI/CD pipeline implementation | 12/10/2022  | Gitlab CI/CD pipeline implementation.     |
| CI/CD pipeline verification   | 12/14/2022  | Gitlab CI/CD pipeline verification tests. |

> __Recommendation:__  Add a table of the Milestones you intend to achieve this week.

| Milestones                | Target Date | Detail                                       |
|---------------------------|-------------|----------------------------------------------|
| Project Kickoff meeting   | 12/01/2022  | Kickoff meeting with client and consultants. |
| App scoping meeting       | 12/02/2022  | Scoping with ACME team on their legacy apps. |

#### Action Items

* List the action items you'll need to complete in-order to complete a Task or reach a Milestone.
* This is the place to document and report on your "punch list".

* __Terms:__
  * __Action Item:__ A documented discrete unit of work required to complete a Task or reach a Milestone.

> __Recommendation:__ Add a table of the Action Items for this week.

| Action Item                           | Target Date | Detail                                       |
|---------------------------------------|-------------|----------------------------------------------|
| Create Gitlab account                 | 12/04/2022  | Register to create my Gitlab account.        |
| Create service-account for automation | 12/04/2022  | Create service-account for CI/CD automation. |

#### Risks, Issues, and Mitigation Plans

* Describe the issues currently in your way.
* Identify risks associated with the work this week.
* List the mitigation plan for any issues and risks.
WEEKLY