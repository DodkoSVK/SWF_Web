<script setup>
    import { useRoute } from 'vue-router';
    import {
        NavigationMenu,
        NavigationMenuContent,
        NavigationMenuIndicator,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
        NavigationMenuTrigger,
        navigationMenuTriggerStyle,
        NavigationMenuViewport,
    } from '@/components/ui/navigation-menu'
    const route = useRoute();
</script>


<template>
    <div class="flex min-h-screen flex-col">
        <header class="border-b">
            <div class="mx-auto flex h-14 w-full max-w-6xl gap-5 px-4">
                <!-- Router-->
                <RouterLink :to="{name: 'home' }" class="font-semibold">
                    SZV
                </RouterLink>
                <!-- Navigation-->
                <NavigationMenu>
                    <NavigationMenuList>
                        <!-- Home -->        
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                as-child
                                :active="route.name === 'home'"
                                :class="navigationMenuTriggerStyle()"
                            >
                                <RouterLink :to="{ name: 'home'}">Domov</RouterLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <!-- Clubs -->  
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                as-child
                                :active="route.path.startsWith('/kluby')"
                                :class="navigationMenuTriggerStyle()"   
                            >
                                <RouterLink :to="{ name: 'clubs'}">Kluby</RouterLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <!-- Login Route-->
                <RouterLink :to="{ name: 'login'}" class="ml-auto text-sm font-medium">
                    Prihlásiť sa
                </RouterLink>
            </div>
        </header>

        <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-4">
            <RouterView />
        </main>

        <footer class="border-t py-6 text-center text-sm text-muted-foreground">
            © Slovenský zväz vzpierania
        </footer>
    </div>
 </template>
  

<style lang="scss" scoped>

</style>