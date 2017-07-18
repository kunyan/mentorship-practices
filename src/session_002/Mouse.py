class Mouse(object):
    def __init__(self, name):
        self.name = name

    def say(self):
        print "My name is " + self.name


jerry = Mouse("Jerry")
jerry.say()
