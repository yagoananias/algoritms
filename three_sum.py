class solution:
  def three_sum (self, array) :
    array.sort()

    for i in range (len(array)) :
      a = array[i]
      
      sum = -a
      start = i + 1
      end = len(array) - 1
      
      while(start < end)
        temp_sum = array[start] + array[end]
        if (temp_sum == sum) :
          print("Found three elements whose sum is equal to zero")
          print('The elements are %s, %s and %s.' %(a, array[start], array[end]))
          return
        elif(temp_sum < sum) :
          start+=1
        else:
          end-=1
