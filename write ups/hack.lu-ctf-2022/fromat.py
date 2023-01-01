f=open('index.html','r')
c = f.read()
f.close()

s=c.split('<header')[0]

s+=c.split('</header>')[1]

k=s.split('<nav')[0]
k+=s.split('</nav>')[1]

j=k.split('<aside')[0]
j+=k.split('</aside>')[1]

l=j.split('<div data-rnw-media-class="hidden__visible_b1430-visible" class="css-175oi2r r-k200y r-14lw9ot r-18ayb63 r-13l2t4g r-12dqhl9 r-1rnoaur r-gtdqiz r-1fo40xd r-18u37iz r-17s6mgv" style="width:max(300px, calc((100vw - 910px) / 2 - 0px))" data-testid="page.desktopTableOfContents"></div>')[0]
l+=j.split('<div data-rnw-media-class="hidden__visible_b1430-visible" class="css-175oi2r r-k200y r-14lw9ot r-18ayb63 r-13l2t4g r-12dqhl9 r-1rnoaur r-gtdqiz r-1fo40xd r-18u37iz r-17s6mgv" style="width:max(300px, calc((100vw - 910px) / 2 - 0px))" data-testid="page.desktopTableOfContents"></div>')[1]

f = open('index.html','w')
f.write(l)
f.close()

