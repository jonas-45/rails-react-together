class GreetingsController < ApplicationController
  def greeting
    @greeting = Greeting.order('RANDOM()').first
    render json: {greeting: @greeting.greeting}
  end
end
