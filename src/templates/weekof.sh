#!/bin/bash
function weekof() {
    local week=$1 year=$2
    local week_num_of_Jan_1 week_day_of_Jan_1
    local first_Mon
    local date_fmt="+%m %d"
    local mon sun

    week_num_of_Jan_1=$(date -jf "%Y-%m-%d" $year-01-01 +%W)
    week_day_of_Jan_1=$(date -jf "%Y-%m-%d" $year-01-01 +%u)

    if ((week_num_of_Jan_1)); then
        first_Mon=$year-01-01
    else
        first_Mon=$year-01-$((01 + (7 - week_day_of_Jan_1 + 1) ))
    fi
    echo $first_Mon
    mon=$(date -jf "%Y-%m-%d" "$first_Mon +$((week - 1)) week" "$date_fmt")
    sun=$(date -jf "%Y-%m-%d" "$first_Mon +$((week - 1)) week + 6 day" "$date_fmt")

    echo "Mon=$mon"
    echo "Sun=$sun"
}

weekof $1 $2