
'''
== Description:

- You are given a series of weights, as well as a barbell. Given any input
  weight, you want to return the total number of weights required to

== Considerations:

- The barbell must be balanced at each end at all times
- The barbell weighs 45 lbs
- We want to optimize for using the minimum number of weights possible

'''

def get_weights(target_weight=55):
    '''
    Take a list of weights
    bar weight is 45
    have a results string
    if the input weight is less than or equal to bar
        return the bar
    else 
        set the the target weight to the current weight minus the bar
    while the current weight is not 0
        find out what 2 weights can go inside
        if the weight exists in the weight list
            add that weight and format it in the results string on a new line
        else if it's not in the list
            find another denomination 
        
    '''
def get_weights(target_weight=55):
    weights = [45, 30, 20, 10, 5]
    bar = 45
    results = '1 bar\n'
    if target_weight < bar:
        return '{}? Do you even lift bro?'.format(target_weight)
    else:
        target_weight = int(target_weight - bar)
        while(target_weight != 0):
            left = int(target_weight / 2)
            in_weights = left in weights
            if in_weights:
                results += '2 {}lb weights\n'.format(left)
                target_weight = int(target_weight % left)
            else:
              if target_weight > weights[0]*2:
                weight = target_weight % weights[0]
                amount = int(target_weight/weights[0])
                results += '{} {}lb weights\n'.format(amount, weights[0])
                target_weight = weight
              elif(target_weight >= weights[1]):
                weight = target_weight % weights[2]
                results += '{} {}lb weights\n'.format(2, weights[3])
                target_weight = weight
              elif(target_weight >= weights[2]):
                weight = target_weight % weights[2]
                results += '{} {}lb weights\n'.format(2, weights[4])
                target_weight = weight
              else:
                return 'not balanced'
    return results

'''
== Example:

= sample input:

55

= sample output:

1 bar
2 5lb weights

'''