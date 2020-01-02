import sys
import numpy as np
import random
import datetime

# Pressure at depth http://www.calcdfol.org/CALC/other/games/depth_press
# Depth in feet, Pressure in mbar
def pressure(depth):
    return 1013.25 + 30.63795 * depth

def gen_1(depth, r):
    return pressure(depth) + r

# every 10 seconds, with +-1 variation
def random_timedelta(seconds = 3):
    sec = int(random.random() * seconds) - seconds//2
    ms = int(random.random() * 1000000)
    return datetime.timedelta(seconds=10+sec, microseconds=ms)

def gen_n(d0, df, t0, count=50):
    pressures = []
    mu, sigma = 0, (df - d0) / (count * 3)
    pdist = np.random.normal(mu, sigma, count)
    t = t0
    for i in range(count):
        depth = d0 + (df-d0) * i / count + pdist[i]
        p = pressure(depth)
        t = t + random_timedelta()
        print(f'{t},{p:.2f}')

gen_n(15,75, datetime.datetime(2019, 9, 14, 10, 23, 29))
gen_n(30,90, datetime.datetime(2019, 9, 14, 12, 11, 33))
gen_n(23,82, datetime.datetime(2019, 9, 14, 14, 56, 8))
gen_n(12,77, datetime.datetime(2019, 9, 14, 16, 7, 43))
