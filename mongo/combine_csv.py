import pandas as pd
import glob
import os, csv, sys

# csvPath1 = 'employee_directory1.csv'
# csvPath2 = 'employee_directory2.csv'
# csvPath3 = 'employee_directory3.csv'
# csvPath4 = 'employee_directory4.csv'

# df1 = pd.read_csv(csvPath1)
# df2 = pd.read_csv(csvPath2)
# df3 = pd.read_csv(csvPath3)
# df4 = pd.read_csv(csvPath4)

# merged=df1.append(df2,header=False)
# merged=merged.append(df3,header=False)
# merged=merged.append(df4,header=False)

files = glob.glob("*.csv") 
df = pd.concat((pd.read_csv(f, header = 0) for f in files))
df.to_csv("output.csv")