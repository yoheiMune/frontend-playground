# -*- coding: utf-8 -*-
# Measuring for frontend speed-up.
from pprint import pprint

if __name__ == "__main__":
    
    # ・改善前の把握(平均、ヒストグラム、経過時間、離脱率、日別、表示タイプ別)

    # Load data.
    fpath = "./data/frontend-2016-04-08.log"
    lines = [l for l in open(fpath).read().split('\n') if len(l) > 0]
    print("NumOfLines: ", len(lines))

    # Exit Raito.
    # ============================
    counter = {
        "start": 0,
        "php_end": 0,
        "render_start": 0,
        "show": 0,
        "domReady": 0,
        "onload": 0
    }
    for l in lines:
        key = l.split("\t")[2]
        counter[key] += 1

    # Show.
    print("\nExit Raito:")
    print("===========================")
    print("  start:        %d" % counter["start"])
    print("  php_end:      %d\t%.2f%%" % (counter["php_end"], (counter["php_end"] * 100 / counter["start"])))
    print("  render_start: %d\t%.2f%%" % (counter["render_start"], (counter["render_start"] * 100 / counter["start"])))
    print("  show:         %d\t%.2f%%" % (counter["show"], (counter["show"] * 100 / counter["start"])))
    print("  domReady:     %d\t%.2f%%" % (counter["domReady"], (counter["domReady"] * 100 / counter["start"])))
    print("  onload:       %d\t%.2f%%" % (counter["onload"], (counter["onload"] * 100 / counter["start"])))


    # Ellapsed time.
    used = set()
    for line in lines:
        uid = line.split("\t")[0]
        if uid in used:
            continue
        user_logs = [l for l in lines if l.split("\t")[0] == uid]
        # print(uid, len(user_logs))


        
        used.add(uid)













































